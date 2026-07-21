import { AppDataSource }
from "../config/data-source.js";

import { Inquiry }
from "../entities/inquiry.js";

const repo =
  AppDataSource.getRepository(Inquiry);



export async function createInquiry(
  data: Partial<Inquiry>
) {

  const inquiry =
    repo.create(data);

  return await repo.save(inquiry);
}



export async function getAllInquiries() {

  return await repo.find({
    order: {
      createdAt: "DESC",
    },
  });
}

export async function updateInquiryStatus(
  id: number,
  status: string
)
{

  await repo.update(id, {
    status,
  });

  return await repo.findOne({
    where: {
      id,
    },
  });
}



export async function deleteInquiry(
  id: number
) {

  return await repo.delete(id);
}

