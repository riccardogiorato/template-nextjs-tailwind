import type { NextPage } from "next";
import { Button } from "../components/Button";
import { ArticlesList, getArticlePath } from "./a/[slug]";

import { Reflect } from "@rocicorp/reflect/client";
import { useSubscribe } from "@rocicorp/reflect/react";
import { mutators } from "../reflect-client/mutators";

const r = new Reflect({
  server: "http://localhost:8080",
  roomID: "templateNext",
  userID: "username1",
  mutators,
});

const Home: NextPage = () => {
  const onClick = () => {
    void r.mutate.increment(1);
  };

  const count = useSubscribe(r, (tx) => tx.get<number>("count"), 0);

  return (
    <div className="my-auto max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img
        className="object-cover w-full h-64"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <button onClick={onClick}>{count}</button>

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Product
          </span>
          <a
            href="#"
            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
          >
            I Built A Successful Blog In One Year
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
              >
                Jone Doe
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              1 SEP 2022
            </span>
          </div>
        </div>
      </div>

      <article className="prose lg:prose-xl p-6">
        <h3>Garlic bread with cheese: What the science tells us</h3>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <Button>Read more</Button>
      </article>

      <div className="flex flex-row gap-2 p-6">
        {ArticlesList.map((slug) => {
          return (
            <div key={slug}>
              <a href={getArticlePath(slug)}>
                <Button>{slug}</Button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
