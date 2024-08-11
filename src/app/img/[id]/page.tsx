import FullPageImageView from "~/app/common/full-page-image-view";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImageView photoId={idAsNumber} />;
}
