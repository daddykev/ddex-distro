<script setup>
import { ref, onMounted } from 'vue'

// Mock data - will be replaced with Firebase data
const stats = ref({
  totalReleases: 0,
  pendingDeliveries: 0,
  successRate: 0,
  recentActivity: []
})

onMounted(() => {
  // TODO: Fetch actual data from Firebase
  stats.value = {
    totalReleases: 12,
    pendingDeliveries: 3,
    successRate: 98.5,
    recentActivity: [
      { id: 1, type: 'release', title: 'New Album Released', time: '2 hours ago' },
      { id: 2, type: 'delivery', title: 'Delivery to Spotify completed', time: '5 hours ago' },
      { id: 3, type: 'validation', title: 'ERN validation passed', time: '1 day ago' }
    ]
  }
})
</script>

<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard-header">
        <h1 class="page-title">Dashboard</h1>
        <p class="page-subtitle">Welcome back! Here's an overview of your distribution platform.</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card card">
          <div class="card-body">
            <div class="stat-icon">
              <font-awesome-icon icon="music" />
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ stats.totalReleases }}</div>
              <div class="stat-label">Total Releases</div>
            </div>
          </div>
        </div>

        <div class="stat-card card">
          <div class="card-body">
            <div class="stat-icon pending">
              <font-awesome-icon icon="truck" />
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ stats.pendingDeliveries }}</div>
              <div class="stat-label">Pending Deliveries</div>
            </div>
          </div>
        </div>

        <div class="stat-card card">
          <div class="card-body">
            <div class="stat-icon success">
              <font-awesome-icon icon="check-circle" />
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ stats.successRate }}%</div>
              <div class="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="activity-section">
        <h2 class="section-title">Recent Activity</h2>
        <div class="card">
          <div class="card-body">
            <div v-if="stats.recentActivity.length === 0" class="empty-state">
              <font-awesome-icon icon="chart-bar" class="empty-icon" />
              <p>No recent activity to display</p>
            </div>
            <div v-else class="activity-list">
              <div v-for="activity in stats.recentActivity" :key="activity.id" class="activity-item">
                <div class="activity-icon">
                  <font-awesome-icon 
                    :icon="activity.type === 'release' ? 'music' : activity.type === 'delivery' ? 'truck' : 'check'"
                  />
                </div>
                <div class="activity-content">
                  <div class="activity-title">{{ activity.title }}</div>
                  <div class="activity-time">{{ activity.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <h2 class="section-title">Quick Actions</h2>
        <div class="action-grid">
          <button class="action-card card card-hover">
            <div class="card-body">
              <font-awesome-icon icon="plus" class="action-icon" />
              <span class="action-label">New Release</span>
            </div>
          </button>
          <button class="action-card card card-hover">
            <div class="card-body">
              <font-awesome-icon icon="upload" class="action-icon" />
              <span class="action-label">Upload Assets</span>
            </div>
          </button>
          <button class="action-card card card-hover">
            <div class="card-body">
              <font-awesome-icon icon="cog" class="action-icon" />
              <span class="action-label">Configure Targets</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: var(--space-xl) 0;
}

.dashboard-header {
  margin-bottom: var(--space-xl);
}

.page-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-heading);
  margin-bottom: var(--space-sm);
}

.page-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.stat-card .card-body {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 1.5rem;
}

.stat-icon.pending {
  background-color: var(--color-warning);
  color: white;
  opacity: 0.9;
}

.stat-icon.success {
  background-color: var(--color-success);
  color: white;
  opacity: 0.9;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-heading);
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.activity-section,
.quick-actions {
  margin-bottom: var(--space-2xl);
}

.section-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-heading);
  margin-bottom: var(--space-lg);
}

.empty-state {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--color-text-secondary);
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
  opacity: 0.3;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.activity-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-weight: var(--font-medium);
  color: var(--color-text);
  margin-bottom: var(--space-xs);
}

.activity-time {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.action-card {
  cursor: pointer;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  transition: all var(--transition-base);
}

.action-card:hover {
  transform: translateY(-2px);
}

.action-card .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xl) var(--space-lg);
}

.action-icon {
  font-size: 2rem;
  color: var(--color-primary);
}

.action-label {
  font-weight: var(--font-medium);
  color: var(--color-text);
}
</style>