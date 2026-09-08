import Card from "@/app/components/ui/Card";
import Image, {StaticImageData} from "next/image";

type MemberProps = {
  name: string;
  position: string;
  description: string;
  avatar: StaticImageData;
}

export function Member({name, position, description, avatar}: MemberProps) {
  return (
    <Card variant='white' className='px-[35px] py-[40px]'>
      <div className='flex gap-[20px] relative'>
        <a href="#" className='absolute right-0'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="black"/>
            <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
            <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
            <path d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
          </svg>
        </a>
        <svg
          width="98" height="98"
          viewBox="0 0 103 103"
          xmlns="http://www.w3.org/2000/svg"
          style={{overflow: 'visible'}}
        >
          <defs>
            <clipPath id="avatar-clip">
              <path d="M83.8068 48.9117C116.649 86.3213 86.3213 116.649 48.9117 83.8068C11.5021 116.649 -18.8258 86.3213 14.0166 48.9117C-18.8258 11.5021 11.5021 -18.8258 48.9117 14.0166C86.3213 -18.8258 116.649 11.5021 83.8068 48.9117Z" />
            </clipPath>
          </defs>

          <g clipPath="url(#avatar-clip)" transform="translate(7 7)">
            <rect x="-19" y="-19" width="136" height="136" fill="#191A23" />
          </g>
          <g clipPath="url(#avatar-clip)" style={{isolation: 'isolate'}}>
            <image
              href={avatar.src}
              x="-4" y="3" width="105" height="105"
              preserveAspectRatio="xMidYMid slice"
            />
            <rect
              x="-19" y="-19" width="136" height="136"
              fill="#B9FF66"
              style={{mixBlendMode: 'multiply'}}
            />
          </g>
        </svg>

        <div className='self-end'>
          <h4 className='text-h4'>{name}</h4>
          <p className='text-p'>{position}</p>
        </div>
      </div>
      <hr className='mt-[30px] mb-[30px]' />
      <p className='text-p'>{description}</p>
    </Card>
  )
}