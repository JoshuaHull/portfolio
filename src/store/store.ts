export const store: Store = {
  blobIndices: {},
};

type BlobIndices = {
  [blobId: number]: [number, number];
};

type Store = {
  blobIndices: BlobIndices;
}
