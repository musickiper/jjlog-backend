module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  title: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  id: ID
  title: String!
  posts: PostCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutPostsInput {
  create: [CategoryCreateWithoutPostsInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutPostsInput {
  id: ID
  title: String!
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type CategoryPreviousValues {
  id: ID!
  title: String!
}

input CategoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [CategoryScalarWhereInput!]
  OR: [CategoryScalarWhereInput!]
  NOT: [CategoryScalarWhereInput!]
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  title: String
  posts: PostUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyDataInput {
  title: String
}

input CategoryUpdateManyMutationInput {
  title: String
}

input CategoryUpdateManyWithoutPostsInput {
  create: [CategoryCreateWithoutPostsInput!]
  delete: [CategoryWhereUniqueInput!]
  connect: [CategoryWhereUniqueInput!]
  set: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutPostsInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutPostsInput!]
  deleteMany: [CategoryScalarWhereInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
}

input CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput!
  data: CategoryUpdateManyDataInput!
}

input CategoryUpdateWithoutPostsDataInput {
  title: String
}

input CategoryUpdateWithWhereUniqueWithoutPostsInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutPostsDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutPostsInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutPostsDataInput!
  create: CategoryCreateWithoutPostsInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  title: String
}

type Comment {
  id: ID!
  contents: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User!
  post: Post!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  contents: String!
  user: UserCreateOneWithoutCommentsInput!
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostInput {
  id: ID
  contents: String!
  user: UserCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutUserInput {
  id: ID
  contents: String!
  post: PostCreateOneWithoutCommentsInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  contents_ASC
  contents_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  contents: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  contents: String
  contents_not: String
  contents_in: [String!]
  contents_not_in: [String!]
  contents_lt: String
  contents_lte: String
  contents_gt: String
  contents_gte: String
  contents_contains: String
  contents_not_contains: String
  contents_starts_with: String
  contents_not_starts_with: String
  contents_ends_with: String
  contents_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  contents: String
  user: UserUpdateOneRequiredWithoutCommentsInput
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  contents: String
}

input CommentUpdateManyMutationInput {
  contents: String
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutUserInput {
  create: [CommentCreateWithoutUserInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutPostDataInput {
  contents: String
  user: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithoutUserDataInput {
  contents: String
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpdateWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutUserDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentUpsertWithWhereUniqueWithoutUserInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutUserDataInput!
  create: CommentCreateWithoutUserInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  contents: String
  contents_not: String
  contents_in: [String!]
  contents_not_in: [String!]
  contents_lt: String
  contents_lte: String
  contents_gt: String
  contents_gte: String
  contents_contains: String
  contents_not_contains: String
  contents_starts_with: String
  contents_not_starts_with: String
  contents_ends_with: String
  contents_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  post: PostWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Image {
  id: ID!
  url: String!
  post: Post!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  id: ID
  url: String!
  post: PostCreateOneWithoutImagesInput!
}

input ImageCreateManyWithoutPostInput {
  create: [ImageCreateWithoutPostInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutPostInput {
  id: ID
  url: String!
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
}

type ImagePreviousValues {
  id: ID!
  url: String!
}

input ImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ImageScalarWhereInput!]
  OR: [ImageScalarWhereInput!]
  NOT: [ImageScalarWhereInput!]
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  url: String
  post: PostUpdateOneRequiredWithoutImagesInput
}

input ImageUpdateManyDataInput {
  url: String
}

input ImageUpdateManyMutationInput {
  url: String
}

input ImageUpdateManyWithoutPostInput {
  create: [ImageCreateWithoutPostInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  set: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [ImageScalarWhereInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutPostDataInput {
  url: String
}

input ImageUpdateWithWhereUniqueWithoutPostInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutPostDataInput!
}

input ImageUpsertWithWhereUniqueWithoutPostInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutPostDataInput!
  create: ImageCreateWithoutPostInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  post: PostWhereInput
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  contents: String!
  summary: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  title: String!
  contents: String!
  summary: String!
  user: UserCreateOneWithoutPostsInput!
  images: ImageCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
  categories: CategoryCreateManyWithoutPostsInput
}

input PostCreateManyWithoutCategoriesInput {
  create: [PostCreateWithoutCategoriesInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutImagesInput {
  create: PostCreateWithoutImagesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutCategoriesInput {
  id: ID
  title: String!
  contents: String!
  summary: String!
  user: UserCreateOneWithoutPostsInput!
  images: ImageCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutCommentsInput {
  id: ID
  title: String!
  contents: String!
  summary: String!
  user: UserCreateOneWithoutPostsInput!
  images: ImageCreateManyWithoutPostInput
  categories: CategoryCreateManyWithoutPostsInput
}

input PostCreateWithoutImagesInput {
  id: ID
  title: String!
  contents: String!
  summary: String!
  user: UserCreateOneWithoutPostsInput!
  comments: CommentCreateManyWithoutPostInput
  categories: CategoryCreateManyWithoutPostsInput
}

input PostCreateWithoutUserInput {
  id: ID
  title: String!
  contents: String!
  summary: String!
  images: ImageCreateManyWithoutPostInput
  comments: CommentCreateManyWithoutPostInput
  categories: CategoryCreateManyWithoutPostsInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  contents_ASC
  contents_DESC
  summary_ASC
  summary_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  contents: String!
  summary: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  contents: String
  contents_not: String
  contents_in: [String!]
  contents_not_in: [String!]
  contents_lt: String
  contents_lte: String
  contents_gt: String
  contents_gte: String
  contents_contains: String
  contents_not_contains: String
  contents_starts_with: String
  contents_not_starts_with: String
  contents_ends_with: String
  contents_not_ends_with: String
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  contents: String
  summary: String
  user: UserUpdateOneRequiredWithoutPostsInput
  images: ImageUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
  categories: CategoryUpdateManyWithoutPostsInput
}

input PostUpdateManyDataInput {
  title: String
  contents: String
  summary: String
}

input PostUpdateManyMutationInput {
  title: String
  contents: String
  summary: String
}

input PostUpdateManyWithoutCategoriesInput {
  create: [PostCreateWithoutCategoriesInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCategoriesInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostUpdateOneRequiredWithoutImagesInput {
  create: PostCreateWithoutImagesInput
  update: PostUpdateWithoutImagesDataInput
  upsert: PostUpsertWithoutImagesInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutCategoriesDataInput {
  title: String
  contents: String
  summary: String
  user: UserUpdateOneRequiredWithoutPostsInput
  images: ImageUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutCommentsDataInput {
  title: String
  contents: String
  summary: String
  user: UserUpdateOneRequiredWithoutPostsInput
  images: ImageUpdateManyWithoutPostInput
  categories: CategoryUpdateManyWithoutPostsInput
}

input PostUpdateWithoutImagesDataInput {
  title: String
  contents: String
  summary: String
  user: UserUpdateOneRequiredWithoutPostsInput
  comments: CommentUpdateManyWithoutPostInput
  categories: CategoryUpdateManyWithoutPostsInput
}

input PostUpdateWithoutUserDataInput {
  title: String
  contents: String
  summary: String
  images: ImageUpdateManyWithoutPostInput
  comments: CommentUpdateManyWithoutPostInput
  categories: CategoryUpdateManyWithoutPostsInput
}

input PostUpdateWithWhereUniqueWithoutCategoriesInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCategoriesDataInput!
}

input PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutUserDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithoutImagesInput {
  update: PostUpdateWithoutImagesDataInput!
  create: PostCreateWithoutImagesInput!
}

input PostUpsertWithWhereUniqueWithoutCategoriesInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCategoriesDataInput!
  create: PostCreateWithoutCategoriesInput!
}

input PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutUserDataInput!
  create: PostCreateWithoutUserInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  contents: String
  contents_not: String
  contents_in: [String!]
  contents_not_in: [String!]
  contents_lt: String
  contents_lte: String
  contents_gt: String
  contents_gte: String
  contents_contains: String
  contents_not_contains: String
  contents_starts_with: String
  contents_not_starts_with: String
  contents_ends_with: String
  contents_not_ends_with: String
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  createdAt: DateTime!
  updatedAt: DateTime!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  posts: PostCreateManyWithoutUserInput
  comments: CommentCreateManyWithoutUserInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  id: ID
  username: String!
  email: String!
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  posts: PostCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  id: ID
  username: String!
  email: String!
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  comments: CommentCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  avatar_ASC
  avatar_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  bio_ASC
  bio_DESC
  loginSecret_ASC
  loginSecret_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  posts: PostUpdateManyWithoutUserInput
  comments: CommentUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommentsDataInput {
  username: String
  email: String
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  posts: PostUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  email: String
  avatar: String
  firstName: String
  lastName: String
  bio: String
  loginSecret: String
  comments: CommentUpdateManyWithoutUserInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  loginSecret: String
  loginSecret_not: String
  loginSecret_in: [String!]
  loginSecret_not_in: [String!]
  loginSecret_lt: String
  loginSecret_lte: String
  loginSecret_gt: String
  loginSecret_gte: String
  loginSecret_contains: String
  loginSecret_not_contains: String
  loginSecret_starts_with: String
  loginSecret_not_starts_with: String
  loginSecret_ends_with: String
  loginSecret_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    