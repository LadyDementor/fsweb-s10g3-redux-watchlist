export const LISTEME_EKLE = "listeme_ekle";
export const LISTEDEN_CIKAR = "listeden_cikar";

export function listeme_ekle(item) {
  return { type: LISTEME_EKLE, payload: item };
}

export const listeden_cikar = (urunId) => {
  return {
    type: LISTEDEN_CIKAR,
    payload: urunId,
  };
};
