export default function CaptionedImage({ src, alt, caption, align = 'center', width }) {
  return (
    <figure style={{ textAlign: align, margin: '1.5rem auto' }}>
      <img src={src} alt={alt} width={width} />
      {caption && (
        <figcaption style={{ fontSize: '0.85rem', color: 'gray', marginTop: '0.4rem' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}