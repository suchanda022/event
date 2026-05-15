import { AppDataSource } from "../config/data-source.js";
import { Admin } from "../entities/admin.js";

export const AdminRepository = AppDataSource.getRepository(Admin);

export async function findAdminByEmail(email: string): Promise<Admin | null> {
  return AdminRepository.findOne({
    where: {
      email,
    },
  });
}

export async function createAdmin(data: Partial<Admin>): Promise<Admin> {
  const admin = AdminRepository.create(data);
  return AdminRepository.save(admin);
}
