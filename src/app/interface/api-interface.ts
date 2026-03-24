
export interface Skeets{
  id: string;
  author: string;
  avatar: string;
  likes: number;
  time: string;
  text: string;
  uri: string;
  replies: string;
  reposts: string;
}

export interface Followers{
  avatar: string;
  description: string;
  handle: string;
  name: string;
}

export interface Notificaion{
  author: string;
  description: string;
}

export interface Trend{
  topic: string;
  description: string;
}
