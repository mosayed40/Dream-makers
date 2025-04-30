export default function LatestArticles() {
  return (
    <div
      style={{
        padding: "88px 60px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
        background: "#EAF0F1",
        zIndex: "-1",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: "10px",
          direction: "rtl",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <img src="/assets/icons/icon/Layer.svg" />
        <h2> احدث المقالات</h2>
      </section>
      <div style={{ position: "relative" }}>
        <section
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "hidden",
            direction: "rtl",
            width: "90%",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              direction: "rtl",
            }}
          >
            <img src="assets/images/photos/Article_Image.png" />
            <p>10 يناير 2022</p>
            <h6 style={{ fontSize: "15PX" }}>
              إنشاء ألعاب tic tac toe باستخدام React JS
            </h6>
          </div>
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              direction: "rtl",
            }}
          >
            <img src="assets/images/photos/Article_Image.png" />
            <p>10 يناير 2022</p>
            <h6 style={{ fontSize: "15PX" }}>
              إنشاء ألعاب tic tac toe باستخدام React JS
            </h6>
          </div>
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              direction: "rtl",
            }}
          >
            <img src="assets/images/photos/Article_Image.png" />
            <p>10 يناير 2022</p>
            <h6 style={{ fontSize: "15PX" }}>
              إنشاء ألعاب tic tac toe باستخدام React JS
            </h6>
          </div>
          <div
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              direction: "rtl",
            }}
          >
            <img src="assets/images/photos/Article_Image.png" />
            <p>10 يناير 2022</p>
            <h6 style={{ fontSize: "15PX" }}>
              إنشاء ألعاب tic tac toe باستخدام React JS
            </h6>
          </div>
        </section>
      </div>
    </div>
  );
}
