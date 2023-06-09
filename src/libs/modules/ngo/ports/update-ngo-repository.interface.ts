import { Ngo } from '../domain';

export interface UpdateNgoRepositoryInterface {
  execute(id: string, ngo: Ngo): Promise<void>;
}
