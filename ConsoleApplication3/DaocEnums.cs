using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    static class DaocEnums
    {
        //typeid=5
        public enum Resistances
        {
            Crush = 1,
            Slash = 2,
            Thrust = 3,
            Heat = 10,
            Cold = 12,
            Matter = 13,
            Body = 16,
            Spirit = 18,
            Energy = 22
        }

        //typeid=1
        public enum Attributes
        {
            Strength = 0,
            Dexterity = 1,
            Constitution = 2,
            Quickness = 3,
            Intelligence = 4,
            Piety = 5,
            Empathy = 6,
            Charisma = 7,
            Acuity = 10
        }
        public class BonusType
        {
            public bonustype type { get; set; }
            public int max { get; set; }
            public string text { get; set; }

            public enum children { set; }

        }

        public enum bonustype
        {
            Attribute = 1,
            Skill=2,
            Hits = 4,
            Resistance = 5,
            Focus=6,
            MeleeDamage=8,
            MagicDamage=9,
            StyleDamage=10,
            ArcheryRange=11,
            SpellRange=12,
            SpellDuration=13,
            Healing=14,
            StatDebuff=15,
            StatBuff = 16,
            Fatigue=17,
            MeleeSpeed=19,
            ArcherySpeed=20,
            CastingSpeed=21,
            AF = 22,
            CraftMinQuality=23,
            CraftQuality=24,
            CraftSpeed=25,
            CraftSkillIncrease=26,
            ArcheryDamage=27,            
            StatCap=28,
            HitsCap=29,
            PowerCap=30,
            FatigueCap=31,
            SpellPierce=32,
            PowerPool=34,
            ArcaneSiphon=35,//has type id
            PowerCostReductionPvE=37,
            Concentration=38,
            HealthRegen=40,
            PowerRegen=41,
            PieceAblative=42,
            XpLossReduc=44,
            NegativeDurationRedPvE=46,
            StyleCostReducPvE=47,
            ToHitBonusPvE=48,
            DefensiveBonusPvE=49,
            BladeTurnReinforcementPvE=50,
            ParryPvE=51,
            BlockPvE=52,
            EvadePvE=53,
            ReactStyleDmgPvE=54,
            MythicalEncumbrance=55,
            MythicalResCap=57,
            MythicalSiegeSpeed=58,
            MythicalParry=60,
            MythicalEvade=61,
            MythicalBlock=62,
            MythicalCoin = 63,
            MythicalStatCap=64,
            MythicalCrowdControlDurationDescrease=66,
            MythicalEssenceResist=67,
            MythicalResCapStat=68,
            MythicalSiegeAblative=69,
            MythicalDPS=71,
            MythicalRPS=72,
            MythicalStatIncrease=73,
            MythicalResSickReduction=74,
            MythicalStatCapStat=75,
            MythicalHealthRegen=76,
            MythicalPowRegen=77,
            MythicalEndoRegen=78,
            MythicalPhysicalDefense=80   
        }
    }
}
