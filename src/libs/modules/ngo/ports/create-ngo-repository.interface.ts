import { Ngo } from '../domain';

export interface CreateNgoRepositoryInterface {
  execute(ngo: Ngo): void;
}
