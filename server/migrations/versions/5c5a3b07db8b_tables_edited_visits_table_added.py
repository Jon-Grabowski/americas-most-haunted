"""tables edited, visits table added

Revision ID: 5c5a3b07db8b
Revises: 7122aba7fcf8
Create Date: 2023-08-09 08:39:22.831118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5c5a3b07db8b'
down_revision = '7122aba7fcf8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('haunted_locations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('visits',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('haunted_location_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['haunted_location_id'], ['haunted_locations.id'], name=op.f('fk_visits_haunted_location_id_haunted_locations')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_visits_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('haunted_loactions')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('haunted_loactions',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=True),
    sa.Column('location', sa.VARCHAR(), nullable=True),
    sa.Column('description', sa.VARCHAR(), nullable=True),
    sa.Column('image', sa.VARCHAR(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('visits')
    op.drop_table('haunted_locations')
    # ### end Alembic commands ###
