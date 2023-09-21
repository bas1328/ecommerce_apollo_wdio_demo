import Image from "next/image";
import { Fira_Code } from "next/font/google";
import * as Popover from "@radix-ui/react-popover";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";

import styles from "./MiniBasket.module.scss";

const inter = Fira_Code({ subsets: ["latin"] });

const MiniBasketButton = () => {
  const { basketItems, setBasketItems } = useContext(BasketContext);

  const removeFromCartHandler = (id: string) => {
    setBasketItems((state) => state.filter((item) => item.id !== id));
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button  id='basket' >
          <Image src="/basket.png" alt="basket" width={30} height={30} />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={`PopoverContent ${inter.className}`}
          sideOffset={5}
        >
          <h4>
            you picked {basketItems.length}{" "}
            {basketItems.length === 1 ? "item" : "items"}
          </h4>
          <ul>
            {Boolean(basketItems.length) &&
              basketItems.map(({ name, id, image }) => (
                <div className={styles.minicardContainer} key={id}>
                  <div>{name}</div>
                  <div>
                    <Image
                      src={image || "/tshirt.png"}
                      alt={name || "tshirt"}
                      width={50}
                      height={50}
                    />
                  </div>
                  <button id='remove_item' onClick={() => removeFromCartHandler(id as string)}>
                    remove
                  </button>
                </div>
              ))}
          </ul>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default MiniBasketButton;
