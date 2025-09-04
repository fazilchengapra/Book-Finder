import { AlertDialog } from "@radix-ui/themes";
import { Search } from "lucide-react";
import BookCard from "./BookCard";
import { useState } from "react";

type Suggestion = {
  title: string;
  author_name?: Array<string>;
  cover_i?: number;
  cover_edition_key?: string;
  author_key?: Array<string>;
};

const Suggestions = ({ suggestions = [] as Suggestion[] }) => {
  const [option, setOption] = useState<Suggestion | null>(null);

  return (
    <div className="w-full mt-2 rounded-md bg-white">
      <AlertDialog.Root>
        {suggestions.length > 0 &&
          suggestions.map((item, index) => (
            <AlertDialog.Trigger key={index}>
              <div
                onClick={() => setOption(item)}
                className="flex flex-row gap-4 p-3 w-full items-center cursor-pointer hover:bg-gray-100 font-bold rounded-md text-gray-800"
              >
                <Search size={16} className="text-primary" />
                <span>
                  {item.title.length > 40
                    ? `${item.title.slice(0, 40)}...`
                    : item.title}
                </span>
              </div>
            </AlertDialog.Trigger>
          ))}

        <AlertDialog.Content maxWidth="650px">
          <AlertDialog.Title className="hidden">Book</AlertDialog.Title>
          <AlertDialog.Description className="hidden" size="2">
            ..
          </AlertDialog.Description>

          {option && (
            <BookCard
              book={{
                title: option.title,
                author: option.author_name || [],
                coverUrl: option.cover_i
                  ? `https://covers.openlibrary.org/b/id/${option.cover_i}-M.jpg`
                  : "https://via.placeholder.com/150",
                description: "No description available.",
                authorAvatar: option.author_key
                  ? [`https://covers.openlibrary.org/a/olid/${option.author_key[0]}-M.jpg`]
                  : undefined,
                bookUrl: option.cover_edition_key
                  ? `https://openlibrary.org/books/${option.cover_edition_key}`
                  : undefined,
              }}
            />
          )}
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default Suggestions;
