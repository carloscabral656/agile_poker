export interface VoteCardProps {
  id: string;
  status: 'voted' | 'voting';
  userName: string;
  value: number;
}
