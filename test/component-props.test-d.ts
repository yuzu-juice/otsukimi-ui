import type {
  AccordionProps,
  BadgeProps,
  ButtonProps,
  CardProps,
  CheckboxProps,
  DividerProps,
  InputProps,
  LinkProps,
  ListItemProps,
  RadioButtonProps,
  SearchBarProps,
} from "../src";
import type { ReactNode } from "react";

type Assert<T extends true> = T;
type HasRef<T> = "ref" extends keyof T ? true : false;

type _ButtonHasRef = Assert<HasRef<ButtonProps>>;
type _InputHasRef = Assert<HasRef<InputProps>>;
type _CardHasRef = Assert<HasRef<CardProps>>;
type _BadgeHasRef = Assert<HasRef<BadgeProps>>;
type _CheckboxHasRef = Assert<HasRef<CheckboxProps>>;
type _RadioButtonHasRef = Assert<HasRef<RadioButtonProps>>;
type _AccordionHasRef = Assert<HasRef<AccordionProps>>;
type _DividerHasRef = Assert<HasRef<DividerProps>>;
type _LinkHasRef = Assert<HasRef<LinkProps>>;
type _SearchBarHasRef = Assert<HasRef<SearchBarProps>>;
type _ListItemHasRef = Assert<HasRef<ListItemProps>>;

const content: ReactNode = "content";

const accordion: AccordionProps = { title: content };
const checkbox: CheckboxProps = { label: content };
const radioButton: RadioButtonProps = { label: content };
const searchBar: SearchBarProps = {
  buttonLabel: content,
  searchLabel: "Search",
  inputProps: { name: "query" },
  buttonProps: { disabled: true },
};

void [accordion, checkbox, radioButton, searchBar];
