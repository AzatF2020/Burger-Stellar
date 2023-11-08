export type TIngredientData = {
  readonly unique_id?: string | number;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
  readonly __v: number;
  readonly _id: string;
}

export type TIngredient = {
  readonly data: TIngredientData[];
  readonly success: boolean;
}

export type TRegister = {
  readonly success: boolean;
  readonly user: {
    readonly name: string;
    readonly email: string
  },
  readonly accessToken: string;
  readonly refreshToken: string;
}

export type TProfileType = Omit<TRegister, "accessToken" | "refreshToken">
export type TUserData = {
  name: string
  email: string
}