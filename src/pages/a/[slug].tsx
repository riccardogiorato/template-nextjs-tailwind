import type { GetStaticProps, InferGetStaticPropsType } from "next";

import type { GetStaticPaths } from "next";
import { Navbar } from "../../components/Navbar";

type Article = {
  slug: string;
  content: string;
};

export const ArticlesList = ["cool-article", "new-article"];

export const getArticlePath = (slug: string) => {
  return `/a/${slug}`;
};

export const getStaticPaths = (async () => {
  return {
    paths: ArticlesList.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const article = {
    slug: context?.params?.slug as string,
    content: "Hello world",
  };
  return { props: { article } };
}) satisfies GetStaticProps<{
  article: Article;
}>;

export default function Page({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="my-auto max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Navbar pages={[{ name: article.slug, href: "#", current: true }]} />
      <article className="prose lg:prose-xl p-6">
        <h3>Garlic bread with cheese: What the science tells us</h3>
        <p>{article.content}</p>
      </article>
    </div>
  );
}
