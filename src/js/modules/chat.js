export default function chatModule() {
  return {
    chatMessage: '',
    messages: [],
    loading: false,
    error: '',
    notification: '',
    async sendMessage() {
      if (!this.chatMessage.trim()) return;
      this.messages.push({ type: 'user', text: this.chatMessage });
      const userMsg = this.chatMessage;
      this.chatMessage = '';
      this.loading = true;
      this.error = '';
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMsg })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'AI error');
        this.messages.push({ type: 'ai', text: data.reply });
        this.notify('AI responded');
      } catch (err) {
        this.error = err.message;
        this.notify('Error: ' + err.message);
      } finally {
        this.loading = false;
      }
    },
    clearChat() {
      this.messages = [];
    },
    notify(msg) {
      this.notification = msg;
      setTimeout(() => { this.notification = ''; }, 3000);
    }
  };
}
