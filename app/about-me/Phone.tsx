export default function Phone() {
  if (process.env.NODE_ENV === "development") {
    return <span>Phone: 0838 326 868</span>;
  }

  return null;
}
