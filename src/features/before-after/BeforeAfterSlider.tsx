import { useId, useState, type ChangeEvent } from 'react';

export interface SliderImage {
  src: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
}

export interface SliderLabels {
  label: string;
  before: string;
  after: string;
  /** Uses `{before}` and `{after}` placeholders for the percentages. */
  valueText: string;
}

interface Props {
  before: SliderImage;
  after: SliderImage;
  sizes: string;
  labels: SliderLabels;
  initialPosition?: number;
}

export function BeforeAfterSlider({ before, after, sizes, labels, initialPosition = 50 }: Props) {
  const [position, setPosition] = useState(initialPosition);
  const labelId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(event.target.value));
  };

  const valueText = labels.valueText
    .replace('{before}', String(position))
    .replace('{after}', String(100 - position));

  return (
    <figure className="relative m-0 aspect-[3/4] w-full overflow-hidden select-none">
      <img
        src={after.src}
        srcSet={after.srcSet}
        sizes={sizes}
        alt={after.alt}
        width={after.width}
        height={after.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <img
        src={before.src}
        srcSet={before.srcSet}
        sizes={sizes}
        alt={before.alt}
        width={before.width}
        height={before.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className="absolute top-6 left-6 bg-green-900 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-cream-200 uppercase">
        {labels.before}
      </span>
      <span className="absolute top-6 right-6 bg-cream-200 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-green-900 uppercase">
        {labels.after}
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-cream-200"
        style={{ left: `${position}%` }}
      />

      <span id={labelId} className="sr-only">
        {labels.label}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={handleChange}
        aria-labelledby={labelId}
        aria-valuetext={valueText}
        className="peer absolute inset-0 z-20 m-0 size-full cursor-ew-resize opacity-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 z-10 -mt-7 -ml-7 flex size-14 items-center justify-center rounded-full border-2 border-cream-200 bg-green-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-gold-300"
        style={{ left: `${position}%` }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="text-cream-200"
        >
          <path d="m9 6-6 6 6 6" />
          <path d="m15 6 6 6-6 6" />
        </svg>
      </div>
    </figure>
  );
}
