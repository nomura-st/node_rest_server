import { prisma, prismaAppend } from "./db/client";

(async () => {
  {
    const count = await prisma.marker.count();
    console.log(`marker count=${count}`);
    if (count > 0) {
      const marker = await prisma.marker.findFirst({
        where: { commentId: 1 },
      });
      console.log(`marker:${JSON.stringify(marker)}`);
    }
  }

  {
    const count = await prismaAppend.image.count();
    console.log(`image count=${count}`);
    if (count > 0) {
      const image = await prismaAppend.image.findFirst();
      console.log(`image:${JSON.stringify(image)}`);
    }
  }
})();
