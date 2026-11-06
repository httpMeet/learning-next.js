type SearchButtonProps = {
  onSearch: () => void;
};

export default function SearchButton({ onSearch }: SearchButtonProps) {
  return (
    <button
      onClick={onSearch}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Search
    </button>
  );
}
