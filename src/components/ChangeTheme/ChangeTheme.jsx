import { ActionIcon } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react';

export const ChangeTheme = ({changeTheme}) => {
    
  const handleSubmit = () => {
      changeTheme();
  };
  return (
    <ActionIcon onClick={handleSubmit}>
      <IconBulb size={20} stroke={2} />
    </ActionIcon>
  );
};