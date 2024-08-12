declare global {
    interface Window {
      isUserLoggedIn: boolean;
    }
  }

export interface Post  {
    user: {
        image: string;
        name: string
    },
    content: string;
    feelingEmoji: string;
    noOfComments: number;
    isEdited: boolean;
    creatdAt: string;
}


