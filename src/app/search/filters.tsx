import { Combobox } from "@/components/ui/combobox";
import { useBreeds } from "@/hooks/useBreeds";
import { useSetSearchParams } from "@/hooks/useSetSearchParams";

export function Filters({ isLoading }: { isLoading?: boolean }) {
  const { data: breeds, isLoading: isLoadingBreeds } = useBreeds();
  const setSearchParams = useSetSearchParams();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <Combobox
        options={
          breeds?.map((breed) => ({
            label: breed,
            value: breed,
          })) ?? []
        }
        onChange={(breeds) => {
          setSearchParams("breeds", breeds.join(","));
        }}
      />
    </div>
  );
}
