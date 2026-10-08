import { formatNumber, perUnitLabel, unitLabel } from "@/lib/format";
import PriceChange from "@/components/ui/PriceChange";

const CHANGE_WORDS = { up: "বেড়েছে", down: "কমেছে" };

function ChangeSentence({ product }) {
  const { dir } = product.change;

  if (dir === "flat") {
    return <p className="text-sm">গতকালের তুলনায় আজ দাম <b className="font-semibold">অপরিবর্তিত</b></p>;
  }

  const difference = Math.abs(product.today - product.yesterday);
  return (
    <p className="text-sm">
      গতকালের তুলনায় আজ দাম{" "}
      <b className="font-semibold">{CHANGE_WORDS[dir]}</b> ·{" "}
      {formatNumber(difference)} টাকা
    </p>
  );
}

/** Emoji, name, category and today's price with its change */
export default function ProductHeader({ product }) {
  return (
    <header className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center">
      <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-4xl">
        {product.image}
      </span>

      <div className="flex-1 space-y-2">
        <div>
          <h1 className="text-3xl/9 font-bold">{product.nameBn}</h1>
          <p className="text-sm">
            {perUnitLabel(product.unit)} · {product.categoryNameBn}
          </p>
        </div>
        <ChangeSentence product={product} />
      </div>

      <div className="flex flex-col items-center rounded-2xl bg-base-200 px-5 py-4 text-center sm:w-[118px] sm:shrink-0">
        <p className="text-sm text-base-content/70">আজকের দাম</p>
        <p className="text-3xl/9 font-bold">{formatNumber(product.today)}</p>
        <p className="text-sm text-base-content/70">
          টাকা / {unitLabel(product.unit)}
        </p>
        <div className="mt-[3px]">
          <PriceChange change={product.change} variant="inline" />
        </div>
      </div>
    </header>
  );
}
