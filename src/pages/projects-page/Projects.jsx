export default function Projects() {
  return (
    <div className="send-request">
      <h1>test send request page</h1>
      <div className="send-request__container">
        <h1>تقديم طلب شراكة</h1>
        <div className="send-request__content">
          <form className="send-request__form">
            <label htmlFor="name">الاسم:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">البريد الالكتروني:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">الرسالة:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">إرسال الطلب</button>
          </form>
        </div>
      </div>
    </div>
  );
}
