import { AlertDialog, Avatar, Button } from "@radix-ui/themes";

type Book = {
  title: string;
  author: Array<string>;
  coverUrl: string;
  description?: string;
  authorAvatar?: Array<string>;
  bookUrl?: string; // 🔗 OpenLibrary link
};

const BookCard = ({ book }: { book: Book }) => {
  const { title, author, coverUrl, description, authorAvatar, bookUrl } = book;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-12">
          {/* Cover */}
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <div className="rounded-md">
                <img
                  src={coverUrl}
                  className="object-contain h-56 w-auto"
                  alt={title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-span-8 text-start flex flex-col px-4 mt-3 gap-4">
            <div>
              <h1 className="text-lg font-bold text-gray-800">{title}</h1>
              <p className="text-xs text-start text-gray-800">
                by {author?.join(", ")}
              </p>
            </div>

            <div className="text-xs">
              <p
                className={`${
                  description && description.length > 0 && "text-gray-700"
                } text-red-600`}
              >
                {description || "No description available."}
              </p>
            </div>

            {/* Author Avatar */}
            {authorAvatar && (
              <div className="justify-end">
                <div className="flex flex-row">
                  {authorAvatar?.map((url) => (
                    <Avatar
                      key={url}
                      size="2"
                      src={url}
                      radius="full"
                      fallback={author[0]?.charAt(0) || "?"}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        {bookUrl ? (
          <Button asChild>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Read Now
            </a>
          </Button>
        ) : (
          <Button disabled className="w-full justify-center">
            Read Now
          </Button>
        )}

        <AlertDialog.Cancel className="w-full block">
          <Button
            variant="outline"
            color="red"
            className="w-full justify-center"
          >
            Close
          </Button>
        </AlertDialog.Cancel>
      </div>
    </div>
  );
};

export default BookCard;
