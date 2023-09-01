import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { useCallback, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Combobox({
  options,
  onChange,
  disabled,
}: {
  options: { label: string; value: string }[];
  onChange: (values: string[]) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<string[]>([]);

  const getLabel = useCallback(
    (value: string) => options.find((option) => option.value === value)!.label,
    [options]
  );

  console.log(values);

  useEffect(() => {
    onChange(
      values.filter((value) => value !== "").map((value) => getLabel(value))
    );
  }, [values, onChange, getLabel]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {values.length > 0
            ? `${values.length} breeds selected`
            : "All breeds"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search breed..." disabled={disabled} />
          <CommandEmpty>No breed found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  console.log(currentValue, option);
                  setValues(
                    values.find((v) => v === option.value)
                      ? values.filter((value) => value !== option.value)
                      : [...values, option.value]
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    values.find((v) => v === option.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
