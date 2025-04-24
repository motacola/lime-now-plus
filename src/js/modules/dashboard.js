export default function dashboardModule() {
  return {
    user: null,
    dashboardData: [],
    loading: false,
    error: '',
    notification: '',
    async init() {
      await this.loadDashboard();
    },
    async loadDashboard() {
      this.loading = true;
      this.error = '';
      try {
        const res = await fetch('/api/dashboard');
        if (!res.ok) throw new Error('Failed to load dashboard data');
        const data = await res.json();
        this.dashboardData = data.items || [];
        this.user = data.user || null;
        this.notify('Dashboard loaded');
      } catch (err) {
        this.error = err.message;
        this.notify('Error: ' + err.message);
      } finally {
        this.loading = false;
      }
    },
    async refresh() {
      await this.loadDashboard();
    },
    notify(msg) {
      this.notification = msg;
      setTimeout(() => { this.notification = ''; }, 3000);
    }
  };
}
