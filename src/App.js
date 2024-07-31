import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

// Card'a tek tek proplar ekleyin, ardından bunları kullanmak için her birini yeniden yapılandırın
function Card({ userName, avatarUrl1, postDate, content }) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="bg-white sm:rounded-lg sm:shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={avatarUrl1}
                alt={`${userName}'s avatar`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">
                <a href="#" className="hover:underline">
                  {userName}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">
                  {postDate}
                </a>
              </p>
            </div>
            <CardButton />
          </div>
        </div>
        <div className="px-4 pb-5 opacity-25 sm:p-6 sm:pt-0">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function CardButton() {
  return (
    <div className="flex flex-shrink-0 self-center">
      <div className="relative inline-block text-left">
        <div>
          <div className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
            <span className="sr-only">Açık opsiyonlar</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-100">
      <Card
        userName="Chelsea Hagon"
        postDate="9 Aralık saat 11:43"
        avatarUrl1="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam
quam, quidem vel assumenda repellat inventore sint nesciunt, ullam
asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda
distinctio veniam quam tempora modi aperiam nemo voluptate
reprehenderit quidem, nisi vero est."
      />
    </div>
  );
}
