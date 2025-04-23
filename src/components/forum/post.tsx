'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Reply, Flag, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';

interface PostProps {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  isAuthor: boolean;
  onReply: (id: string) => void;
}

export function Post({
  id,
  author,
  avatar,
  content,
  timestamp,
  likes,
  dislikes,
  isAuthor,
  onReply,
}: PostProps) {
  const [showActions, setShowActions] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);

  const handleLike = () => {
    if (userAction === 'like') {
      setLikeCount(likeCount - 1);
      setUserAction(null);
    } else {
      if (userAction === 'dislike') {
        setDislikeCount(dislikeCount - 1);
      }
      setLikeCount(likeCount + 1);
      setUserAction('like');
    }
  };

  const handleDislike = () => {
    if (userAction === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setUserAction(null);
    } else {
      if (userAction === 'like') {
        setLikeCount(likeCount - 1);
      }
      setDislikeCount(dislikeCount + 1);
      setUserAction('dislike');
    }
  };

  return (
    <div className="p-6 rounded-lg border border-border bg-card relative">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt={`${author}'s avatar`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-semibold">
              {author.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">{author}</h4>
              <p className="text-xs text-muted-foreground">{timestamp}</p>
            </div>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowActions(!showActions)}
                className="p-1 h-auto"
              >
                <MoreHorizontal size={16} />
              </Button>
              {showActions && (
                <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-card z-10 border border-border">
                  <div className="py-1">
                    <button
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center gap-2"
                      onClick={() => {
                        setShowActions(false);
                      }}
                    >
                      <Flag size={14} />
                      Report
                    </button>
                    {isAuthor && (
                      <>
                        <button
                          className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center gap-2"
                          onClick={() => {
                            setShowActions(false);
                          }}
                        >
                          <span className="w-3.5 h-3.5 mr-0.5 flex items-center justify-center">
                            ✏️
                          </span>{' '}
                          Edit
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 text-sm hover:bg-muted text-red-500 flex items-center gap-2"
                          onClick={() => {
                            setShowActions(false);
                          }}
                        >
                          <span className="w-3.5 h-3.5 mr-0.5 flex items-center justify-center">
                            🗑️
                          </span>{' '}
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-2 prose prose-sm max-w-none">
            <p className="text-sm whitespace-pre-line">{content}</p>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 h-auto ${userAction === 'like' ? 'text-primary' : ''}`}
              onClick={handleLike}
            >
              <ThumbsUp size={16} className="mr-1" />
              <span className="text-xs">{likeCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 h-auto ${userAction === 'dislike' ? 'text-primary' : ''}`}
              onClick={handleDislike}
            >
              <ThumbsDown size={16} className="mr-1" />
              <span className="text-xs">{dislikeCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-auto"
              onClick={() => onReply(id)}
            >
              <Reply size={16} className="mr-1" />
              <span className="text-xs">Reply</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 