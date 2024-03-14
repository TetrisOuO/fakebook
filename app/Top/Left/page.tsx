export default function TopLeft() {
  return (
    <div className="flex items-center justify-center">
      <a href="./">
        <div className="p-1 m-2 border-solid bg-gray-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=" stroke-gray-400"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      </a>
      <div className="flex h-10 bg-gray-700 rounded-3xl">
        <div className="items-center justify-center m-2 p-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=" stroke-gray-400 m-0"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="搜尋 Fakebook"
          className="w-full h-9 m-0.5 outline-none border-none bg-transparent"
        ></input>
      </div>
    </div>
  );
}
