export default function authModule() {
  return {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showNotification: false,
    notificationMessage: '',
    async signup() {
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Signup failed');
        this.notificationMessage = 'Signup successful!';
        this.showNotification = true;
      } catch (err) {
        this.notificationMessage = err.message;
        this.showNotification = true;
      }
    },
    async login() {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Login failed');
        this.notificationMessage = 'Logged in!';
        this.showNotification = true;
      } catch (err) {
        this.notificationMessage = err.message;
        this.showNotification = true;
      }
    },
    async logout() {
      try {
        await fetch('/api/logout', { method: 'POST' });
        this.notificationMessage = 'Logged out';
        this.showNotification = true;
      } catch (err) {
        this.notificationMessage = 'Logout failed';
        this.showNotification = true;
      }
    }
  };
}
