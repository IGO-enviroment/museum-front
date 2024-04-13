import { DatePicker } from 'shared/ui/date-picker';

type Props = {
  values: [string, string];
  onChange: (values?: [string, string]) => void;
};

export const DatePickerField = ({ onChange, values }: Props) => {
  const onSelect = (dateName?: string, value?: string) => {
    if (dateName === 'to') {
      onChange([value || '', values[1]]);
    } else {
      onChange([values[0], value || '']);
    }
  };

  return (
    <>
      <DatePicker name='to' value={values[0]} onSelect={onSelect} />
      <DatePicker name='from' value={values[1]} onSelect={onSelect} />
    </>
  );
};
