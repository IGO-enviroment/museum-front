import { Select, Option } from 'shared/ui/select';

export const FilterItem = () => {
  return (
    <Select>
      <Option value={10}>Ten</Option>
      <Option value={20}>Twenty</Option>
      <Option value={30}>Thirty</Option>
    </Select>
  );
};
