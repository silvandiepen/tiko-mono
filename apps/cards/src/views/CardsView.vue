<template>
  <div :class="bemm()">
      <!-- Search & Filters -->
    <div :class="bemm('toolbar')">
      <TInput
        :class="bemm('search')"
        v-model="searchQuery"
        :placeholder="t(keys.cards.searchCards)"
        icon="search"
      />

      <div :class="bemm('view-controls')">
        <TButton
          :class="bemm('view-button', { active: currentView === 'grid' })"
          color="secondary"
          icon="board-multi"
          @click="handleViewChange('grid')"
          :title="t(keys.cards.gridView)"
          :tooltip="t(keys.cards.gridView)"
        />
        <TButton
          :class="bemm('view-button', { active: currentView === 'groups' })"
          color="secondary"
          icon="folder"
          @click="handleViewChange('groups')"
          :title="t(keys.cards.groupsView)"
          :tooltip="t(keys.cards.groupsView)"
        />
      </div>
    </div>

    <!-- Selection Actions -->
    <div v-if="editMode && selectedCards.length > 0" :class="bemm('selection-bar')">
      <span :class="bemm('selection-count')">{{ selectedCards.length }} {{ t(keys.cards.selected) }}</span>

      <div :class="bemm('selection-actions')">
        <TButton
          color="primary"
          icon="folder-plus"
          @click="showCreateGroupModal"
        >
          {{ t(keys.cards.createCardGroup) }}
        </TButton>
        <TButton
          color="danger"
          icon="trash"
          @click="deleteSelectedCards"
        >
          {{ t(keys.common.delete) }}
        </TButton>
        <TButton
          color="secondary"
          icon="x"
          @click="clearSelection"
        >
          {{ t(keys.cards.clear) }}
        </TButton>
      </div>
    </div>

    <!-- Main Content -->
    <main :class="bemm('content')">
      <!-- Loading State -->
      <div v-if="isLoading" :class="bemm('loading')">
        <p>{{ t(keys.cards.loadingCards) }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" :class="bemm('error')">
        <p>{{ error }}</p>
        <TButton color="primary" @click="loadCards">{{ t(keys.cards.tryAgain) }}</TButton>
      </div>

      <!-- Empty State -->
      <div v-else-if="!cards.length" :class="bemm('empty')">
        <div :class="bemm('empty-content')">
          <TIcon name="card" :class="bemm('empty-icon')" />
          <h2 :class="bemm('empty-title')">{{ t(keys.cards.noCardsYet) }}</h2>
          <p :class="bemm('empty-description')">
            {{ t(keys.cards.createFirstCardPrompt) }}
          </p>
          <TButton
            v-if="parentMode.canManageContent.value"
            color="primary"
            icon="plus"
            @click="showCreateCardModal"
          >
            {{ t(keys.cards.createFirstCard) }}
          </TButton>
        </div>
      </div>

      <!-- No Search Results -->
      <div v-else-if="searchQuery && !filteredCards.length" :class="bemm('empty')">
        <div :class="bemm('empty-content')">
          <TIcon name="search" :class="bemm('empty-icon')" />
          <h2 :class="bemm('empty-title')">{{ t(keys.cards.noCardsFound) }}</h2>
          <p :class="bemm('empty-description')">
            {{ t(keys.cards.tryDifferentSearch) }}
          </p>
          <TButton
            color="secondary"
            icon="x"
            @click="searchQuery = ''"
          >
            {{ t(keys.cards.clearSearch) }}
          </TButton>
        </div>
      </div>

      <!-- Cards Grid View -->
      <div v-else-if="currentView === 'grid'" :class="bemm('grid')">
        <TCardCommunication
          v-for="card in filteredCards"
          :key="card.id"
          :card="card"
          :edit-mode="editMode"
          :selected="selectedCards.includes(card.id)"
          :size="settings.cardSize"
          @click="handleCardClick"
          @select="handleCardSelect"
          @edit="handleCardEdit"
          @delete="handleCardDelete"
        />

        <!-- Add Card Button -->
        <div
          v-if="editMode && parentMode.canManageContent.value"
          :class="bemm('add-card')"
          @click="showCreateCardModal"
        >
          <TIcon name="plus" :class="bemm('add-icon')" />
          <span :class="bemm('add-text')">{{ t(keys.cards.addCard) }}</span>
        </div>
      </div>

      <!-- Groups View -->
      <div v-else-if="currentView === 'groups'" :class="bemm('groups')">
        <!-- Card Groups -->
        <div
          v-for="group in groups"
          :key="group.id"
          :class="bemm('group')"
        >
          <h3 :class="bemm('group-title')">{{ group.name }}</h3>
          <div :class="bemm('group-cards')">
            <TCardCommunication
              v-for="cardId in group.cardIds"
              :key="cardId"
              :card="cards.find(c => c.id === cardId)!"
              :edit-mode="editMode"
              :selected="selectedCards.includes(cardId)"
              :size="settings.cardSize"
              @click="handleCardClick"
              @select="handleCardSelect"
              @edit="handleCardEdit"
              @delete="handleCardDelete"
            />
          </div>
        </div>

        <!-- Ungrouped Cards -->
        <div v-if="ungroupedCards.length" :class="bemm('group')">
          <h3 :class="bemm('group-title')">{{ t(keys.cards.ungroupedCards) }}</h3>
          <div :class="bemm('group-cards')">
            <TCardCommunication
              v-for="card in ungroupedCards"
              :key="card.id"
              :card="card"
              :edit-mode="editMode"
              :selected="selectedCards.includes(card.id)"
              :size="settings.cardSize"
              @click="handleCardClick"
              @select="handleCardSelect"
              @edit="handleCardEdit"
              @delete="handleCardDelete"
            />
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useBemm } from 'bemm'
import { TButton, TInput, TIcon, TCardCommunication, useParentMode, useI18n } from '@tiko/ui'
import { useCardsStore } from '../stores/cards'
import CreateCardModal from '../components/CreateCardModal.vue'
import CreateGroupModal from '../components/CreateGroupModal.vue'

const bemm = useBemm('cards-view')
const parentMode = useParentMode('cards')
const { t, keys } = useI18n()

// Store
const store = useCardsStore()
const {
  cards,
  groups,
  selectedCards,
  editMode,
  currentView,
  isLoading,
  error,
  settings,
  filteredCards,
  ungroupedCards,
  loadCards,
  toggleCardSelection,
  toggleEditMode,
  speakCard,
  deleteCard,
  clearSelection
} = store

// Local reactive refs for proper two-way binding
const searchQuery = computed({
  get: () => store.searchQuery,
  set: (value: string) => store.searchQuery = value
})

// Get injected services from Framework
const popupService = inject<any>('popupService')
const toastService = inject<any>('toastService')

// Methods
const handleCardClick = (card: any) => {
  if (editMode.value && parentMode.canManageContent.value) {
    // In edit mode, clicking toggles selection
    toggleCardSelection(card.id)
    console.log('Card selected/deselected:', card.label)
    return
  }

  // In normal mode, speak the card
  console.log('Speaking card:', card.label, '-', card.audioText)
  speakCard(card)
}

const handleCardSelect = (cardId: string) => {
  toggleCardSelection(cardId)
  console.log('Card selection toggled:', cardId)
}

const handleCardEdit = (card: any) => {
  console.log('Edit card:', card.label)
  // TODO: Open edit modal
}

const handleCardDelete = async (cardId: string) => {
  if (!confirm('Delete this card?')) return
  await deleteCard(cardId)
}

const handleCardCreated = () => {
  popupService?.close()
  toastService?.show({
    message: 'Card created successfully',
    type: 'success'
  })
}

const handleGroupCreated = () => {
  popupService?.close()
  clearSelection()
  toastService?.show({
    message: 'Group created successfully',
    type: 'success'
  })
}

const deleteSelectedCards = async () => {
  if (!confirm(`Delete ${selectedCards.value.length} cards?`)) return

  for (const cardId of selectedCards.value) {
    await deleteCard(cardId)
  }

  clearSelection()
}

const handleViewChange = (view: 'grid' | 'groups') => {
  store.currentView = view
  console.log('View changed to:', view)
}

// Show create card modal
const showCreateCardModal = () => {
  popupService?.open({
    component: CreateCardModal,
    props: {
      onCreated: handleCardCreated,
      onClose: () => popupService?.close()
    }
  })
}

// Show create group modal
const showCreateGroupModal = () => {
  popupService?.open({
    component: CreateGroupModal,
    props: {
      selectedCards: selectedCards.value,
      onCreated: handleGroupCreated,
      onClose: () => popupService?.close()
    }
  })
}
</script>

<style lang="scss">
.cards-view {


  &__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: var(--color-accent);
    border-bottom: 1px solid var(--color-border);
  }

  &__search {
    flex: 1;
    max-width: 400px;
  }

  &__view-controls {
    display: flex;
    gap: 0.5rem;
  }

  &__view-button {
    &--active {
      background: var(--color-primary);
      color: white;
    }
  }

  &__selection-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
    border-bottom: 1px solid var(--color-border);
  }

  &__selection-count {
    font-weight: 500;
  }

  &__selection-actions {
    display: flex;
    gap: 0.5rem;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
  }

  &__loading,
  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }

  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__empty-content {
    text-align: center;
    max-width: 300px;
  }

  &__empty-icon {
    font-size: 4rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }

  &__empty-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: var(--color-primary-text);
  }

  &__empty-description {
    margin: 0 0 1.5rem 0;
    color: var(--color-text-secondary);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
    align-content: start;
  }

  &__add-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    border: 2px dashed var(--color-border);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--color-text-secondary);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }

  &__add-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  &__add-text {
    font-size: 0.875rem;
    font-weight: 500;
  }

  &__groups {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__group {
    &:not(:last-child) {
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 2rem;
    }
  }

  &__group-title {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-primary-text);
  }

  &__group-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}

// Responsive design
@media (max-width: 768px) {
  .cards-view {
    &__toolbar {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }

    &__view-controls {
      justify-content: center;
    }

    &__selection-bar {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }

    &__content {
      padding: 1rem;
    }

    &__grid,
    &__group-cards {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 0.75rem;
    }
  }
}
</style>
