import { AxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message);
    return;
  }

  toast.error('Internal error');
};

export const fileToBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

export const formatDate = (
  date: Date | string | number,
  desireFormat: string | undefined = 'DD/MM/YYYY'
) => {
  return date ? dayjs(date).format(desireFormat) : '';
};
