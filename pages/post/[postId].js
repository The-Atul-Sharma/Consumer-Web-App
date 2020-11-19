import { useRouter } from 'next/router'

import PostInfo from '../../modules/postInfo';
import Loader from '../../components/Loader';

export default function Post() {
  const router = useRouter()
  const userId = router.query.user;
  const postId = router.query.postId;

  if (!userId || !postId) {
    return <Loader />
  }

  return <PostInfo userId={userId} postId={postId} />;
}
