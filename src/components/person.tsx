export function Person(): JSX.Element {
  return (
    <section>
      <h1 className="heading">Roman Ermishin</h1>
      <div className="p-2">
        <img
          src="/avatar.webp"
          alt="developer's face"
          className="mx-auto aspect-square overflow-clip rounded-full shadow"
        />
      </div>
    </section>
  );
}
