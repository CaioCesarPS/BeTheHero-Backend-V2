import { Ngo } from '../domain';

export interface FindAllNgoRepositoryInterface {
  execute(): Promise<Ngo[]>;
}
