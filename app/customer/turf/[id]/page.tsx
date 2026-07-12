import React from "react";

export default function CustomerTurfDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Turf Details: {id}</h1>
    </div>
  );
}

