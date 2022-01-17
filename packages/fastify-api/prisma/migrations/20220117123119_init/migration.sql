-- CreateEnum
CREATE TYPE "Source" AS ENUM ('Browser', 'External', 'Unknown');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "UserDir" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRootDirectory" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "UserRootDirectory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Directory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userRootDirectoryId" INTEGER NOT NULL,

    CONSTRAINT "Directory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" "Source" NOT NULL DEFAULT E'Unknown',
    "quickAddDirId" INTEGER,
    "directoryId" INTEGER,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link_Tag" (
    "linkId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "Link_Tag_pkey" PRIMARY KEY ("linkId","tagId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_UserDir_key" ON "User"("UserDir");

-- CreateIndex
CREATE UNIQUE INDEX "Directory_name_key" ON "Directory"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_UserDir_fkey" FOREIGN KEY ("UserDir") REFERENCES "UserRootDirectory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Directory" ADD CONSTRAINT "Directory_userRootDirectoryId_fkey" FOREIGN KEY ("userRootDirectoryId") REFERENCES "UserRootDirectory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_quickAddDirId_fkey" FOREIGN KEY ("quickAddDirId") REFERENCES "UserRootDirectory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_directoryId_fkey" FOREIGN KEY ("directoryId") REFERENCES "Directory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link_Tag" ADD CONSTRAINT "Link_Tag_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link_Tag" ADD CONSTRAINT "Link_Tag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
