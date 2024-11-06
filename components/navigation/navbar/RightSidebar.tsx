import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "How to use React Query?" },
  { _id: "3", title: "How to use Redux?" },
  { _id: "4", title: "How to use React Router?" },
  { _id: "5", title: "How to use React Context?" },
];

const popularTags = [
  {
    _id: "1",
    name: "React",
    questions: 100,
  },
  {
    _id: "2",
    name: "JavaScript",
    questions: 200,
  },
  {
    _id: "3",
    name: "TypeScript",
    questions: 150,
  },
  {
    _id: "4",
    name: "NextJS",
    questions: 50,
  },
  {
    _id: "5",
    name: "React Query",
    questions: 75,
  },
];

const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px] ">
          {hotQuestions.map(({ _id, title }) => {
            return (
              <Link
                key={_id}
                className="flex cursor-pointer items-center justify-between gap-7"
                href={ROUTES.QUESTION(_id)}
              >
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="Chevron"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16 ">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => {
            return (
              <TagCard
                key={_id}
                _id={_id}
                name={name}
                questions={questions}
                showCount
                compact
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
