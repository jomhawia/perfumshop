export default function HeaderOfCart() {
  return (
    <div
      className="flex flex-col p-15"
      style={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        height: "220px",
      }}
    >
      <h1 className="font-bold text-4xl text-center m-5">Your shopping cart</h1>
    </div>
  );
}
