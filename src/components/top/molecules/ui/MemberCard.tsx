import Image from "next/image";

export type MemberInformation = {
  name: string;
  imageUrl: string;
  details: { title: string; description: string; url?: string }[];
};

export type MemberCardProps = {
  member: MemberInformation;
};

const MemberCard = ({ member }: MemberCardProps) => (
  <div className="border-[0.5px] border-t-[12px] rounded-lg border-light p-6 flex flex-col md:flex-row md:items-center">
    <div className="flex flex-col items-center mb-4 md:mb-0">
      <Image
        src={member.imageUrl}
        alt={member.name}
        className="rounded-lg w-24 h-24 object-cover"
        width={96}
        height={96}
        priority
      />
      <div className="mt-2 text-start">
        <div className="text-light">{member.name}</div>
      </div>
    </div>
    <div className="flex-1 space-y-4 ml-6">
      {member.details.map((detail, index) => (
        <div key={detail.title}>
          <h4 className="font-bold text-light">{detail.title}</h4>
          {detail.url ? (
            <a
              href={detail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {detail.description}
            </a>
          ) : (
            <div
              className="text-light"
              dangerouslySetInnerHTML={{
                __html: detail.description,
              }}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MemberCard;
