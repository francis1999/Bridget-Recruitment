import {ReactNode} from 'react';
import {StyleProp, TextInputProps, TextStyle} from 'react-native';

export interface PhoneInputProps extends TextInputProps {
  label: string;
  error?: string | boolean;
  onChange: (txt: any) => void;
  setCode: (txt: any) => void;
  placeholder: string;
}

export interface InputProps extends TextInputProps {
  label: string;
  error?: string | boolean;
  onChange: (txt: any) => void;
  icon?: any;
  currency?: boolean;
  prefix?: string;
  moreStyles?: StyleProp<TextStyle>;
}
// @ts-ignore
export interface DatePickerProps extends DateTimePickerProps {
  label: string;
  error?: string | boolean;
  placeholder?: string;
  onDateSelect: (date: Date | string) => void; // Adjust the type of the parameter
  disable?: boolean;
  minDate?: Date; // Correct type for minDate
  maxDate?: Date; // Correct type for maxDate
  dateFormat?: string;
  onConfirm?: (date: Date) => void;
  onCancel: () => void;
}



export interface CountriesWithFlagsInterface {
  title: string;
  image: string;
  code: string;
  additional_code: string;
  base_code: string;
  code_description: string;
  created_by: null | string;
  created_on: string;
  deleted_by: null | string;
  deleted_flag: boolean;
  deleted_on: null | string;
  id: number;
  link_id: string;
  modified_by: null | string;
  modified_on: null | string;
  ref_code: string;
  url: null | string;
  version: null | string;
}

export interface CurrencyDropdownInterface {}
