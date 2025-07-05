import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductCart({ product }) {
  const { name, quantity, price } = product;
  return (
    <li className="border-b-2 border-rose-100 flex items-center justify-between pb-4">
      <div>
        <h3 className="font-semibold text-sm text-rose-900 mb-2">{name}</h3>

        <div className="flex items-center gap-2">
          <p className="text-red font-semibold text-sm">{quantity}</p>
          <p className="text-sm text-rose-500">@ 5.50</p>
          <p className="font-semibold text-sm text-rose-500">
            {price * quantity}
          </p>
        </div>
      </div>
      <Icon
        icon="iconoir:delete-circle"
        width="20"
        height="20h"
        className="text-rose-400"
      />
    </li>
  );
}
